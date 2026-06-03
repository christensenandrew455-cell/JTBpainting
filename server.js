import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const resend =
new Resend(
process.env.RESEND_API_KEY
);

app.post(
"/send-email",
async(req,res)=>{

try{

const {

websiteName,

submissionDate,

firstName,

lastName,

contactMethod,

address,

projectSize,

date,

message

} = req.body;

await resend.emails.send({

from:
"Website Lead <onboarding@resend.dev>",

to:[
SITE_CONFIG?.resendEmail ||
"youremail@email.com"
],

subject:
`New Lead - ${websiteName}`,

html:

`

<h1>New Website Lead</h1>

<hr>

<h2>Lead Information</h2>

<p>
<b>Website:</b>
${websiteName}
</p>

<p>
<b>Submitted:</b>
${submissionDate}
</p>

<p>
<b>Name:</b>
${firstName} ${lastName}
</p>

<p>
<b>Contact:</b>
${contactMethod}
</p>

<p>
<b>Address:</b>
${address}
</p>

<p>
<b>Project Size:</b>
${projectSize}
</p>

<p>
<b>Requested Date:</b>
${date}
</p>

<p>
<b>Message:</b>
${message}
</p>

`

});

res.json({
success:true
});

}catch(error){

console.log(error);

res.status(500).json({

success:false,

message:error.message

});

}

});

app.listen(3000,()=>{

console.log(
"Server running on port 3000"
);

});
