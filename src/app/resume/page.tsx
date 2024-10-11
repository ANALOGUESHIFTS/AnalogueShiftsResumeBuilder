'use client'
import { useState } from 'react';

const Resume = () => {
  const [imageURL, setImageURL] = useState('');
  const [resume, setResume] = useState({
    htmlTemplate: "",
    image: "",
    pdf: "",
  });
  const [resumeDetails, setResumeDetails] = useState({
    name: 'John Doe',
    contactInfo: 'john@example.com',
    workExperience: 'Software Developer at XYZ',
    education: 'B.Sc. in Computer Science',
    skills: ['JavaScript', 'React', 'Next.js'],
  });

  const handleGenerateResume = async () => {

    const response = await fetch('/api/generateTemplate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ resumeDetails }),
    });

    const { resume } = await response.json();
    setResume(resume);

};


  return (
    <div>
        <h1>Resume Builder from Image</h1>
        <input
            type="text"
            placeholder="Enter image URL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
        />
        <button onClick={handleGenerateResume}>Generate Resume</button>

        <div id="resumePreview" dangerouslySetInnerHTML={{ __html: resume?.htmlTemplate }} />
        {/* <img src={`${resume.image}`} alt='resume' />
        <a href={`${resume.pdf}`} download="resume.pdf">Download PDF</a> */}
    </div>
  );
};

export default Resume;