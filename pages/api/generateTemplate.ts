import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';


export default async function generateTemplate(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {
    const { resumeDetails } = req.body;

    if (!resumeDetails) {
      return res.status(422).json({ 
        status: 422, 
        success: false,
        message: 'Extracted text is required.' 
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const template = 'templates/t0.png'

    try {
      const prompt = `
        Using similar design from the image:
        ${template}
        
        Generate a professional HTML and TailwindCSS cdn resume template. Only provide the HTML code without any additional text or explanations. 
        The template should include the following sections:
        ${resumeDetails}
        
        Make sure the resume is modern, clean, and responsive.
      `;

      const response = await openai.chat.completions.create({
        // model: "gpt-4",
        // model: "gpt-4o",
        model: "gpt-3.5-turbo",
        messages: [{ "role": "user", "content": prompt }]
      });

      const htmlTemplate = response.choices[0]?.message?.content?.trim();

      if (htmlTemplate) {
        
        // const browser = await puppeteer.launch();
        // const page = await browser.newPage();

        // const pdfBuffer = await page.pdf({ format: 'A4' });
        // const imageBuffer = await page.screenshot({ type: 'png' });
        // await browser.close();

        
        res.status(200).json({ 
          status: 200, 
          success: true,
          resume: {
            htmlTemplate,
          }
        });
      } else {
        res.status(404).json({ 
          status: 404, 
          success: false,
          message: 'No HTML content generated.' 
        });
      }
    } catch (error) {
      console.error('Error generating resume template:', error);
      res.status(500).json({ 
        status: 500, 
        success: false,
        message: 'Error generating resume template.' 
      });
    }
  } else {
    res.status(405).json({ 
      status: 405, 
      success: false,
      message: 'Method not allowed' 
    });
  }
}
