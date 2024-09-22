/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const GenerateCourseLayout_AI = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate A Couse Tutorial on Following Detail With field as Course Name,Description ,Along with Chapter Name, About, Duration: Category:'Programming', Topic: 'Python',  Level: 'Basic', Duration: '1 Hours', NoOfChapter: 5, in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "Course": {\n    "Name": "Python Programming for Beginners",\n    "Description": "This course will introduce you to the fundamentals of Python programming. You will learn the basic syntax, data types, operators, control flow, functions, and more. By the end of the course, you will be able to write simple Python programs.",\n    "Chapters": [\n      {\n        "Name": "Introduction to Python",\n        "About": "This chapter will introduce you to the history of Python, its features, and its applications. You will also learn how to set up your Python environment.",\n        "Duration": "15 minutes"\n      },\n      {\n        "Name": "Basic Syntax and Data Types",\n        "About": "This chapter will cover the basic syntax of Python, including variables, operators, and data types.",\n        "Duration": "30 minutes"\n      },\n      {\n        "Name": "Control Flow",\n        "About": "This chapter will introduce you to control flow statements, such as if-else statements, loops, and functions.",\n        "Duration": "20 minutes"\n      },\n      {\n        "Name": "Data Structures",\n        "About": "This chapter will cover Python\'s built-in data structures, including lists, tuples, dictionaries, and sets.",\n        "Duration": "15 minutes"\n      },\n      {\n        "Name": "Introduction to Modules and Libraries",\n        "About": "This chapter will introduce you to the concept of modules and libraries in Python. You will learn how to import and use modules and libraries in your programs.",\n        "Duration": "10 minutes"\n      }\n    ],\n    "Category": "Programming",\n    "Topic": "Python",\n    "Level": "Basic",\n    "Duration": "1 Hour",\n    "NoOfChapters": 5\n  }\n}\n```\n',
        },
      ],
    },
  ],
});

//   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//   console.log(result.response.text());
