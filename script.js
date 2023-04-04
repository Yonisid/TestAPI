let btn = document.getElementById("btn");

// function api() {
//   method: POST service.brilliantnavigator.com/brightservice/brightservice.asmx/EnqueueSurvey HTTP/1.1
//   Host: service.brilliantnavigator.com
//   content-type: length,

//   PhoneNumberOrEmail: "0764206410",
//   CompanyRefCode: "Entercard",
//   AgentRefCode: "26137",
//   SurveyRefCode: "CS_Loan FI",
//   LanguageCode: "FI",
//   Username: "yoibWS",
//   Password: "sBJGsyBa!DH4TaJ"
// }

async function postJSON(data) {
  try {
    const response = await fetch(
      "service.brilliantnavigator.com/brightservice/brightservice.asmx/EnqueueSurvey",
      {
        Host: "service.brilliantnavigator.com",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded" /*length*/,
          "Content-Length": "length",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const data = {
  PhoneNumberOrEmail: "0764206410",
  CompanyRefCode: "Entercard",
  AgentRefCode: "26137",
  SurveyRefCode: "CS_Loan FI",
  LanguageCode: "FI",
  Username: "yoibWS",
  Password: "sBJGsyBa!DH4TaJ",
};

btn.addEventListener("click", postJSON(data));
