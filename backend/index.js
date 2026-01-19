import dotenv from "dotenv"
import express from "express"
import emailRouter from "../backend/router/email.router.js"
import  cors from "cors"

dotenv.config() 
const app =express();
const allowedOrigins = [
  /\.vercel\.app$/,  // allow ANY Vercel URL
  process.env.FRONTEND_URL, // your main production URL (optional)
];

 const corsOption = {
  origin: function (origin, callback) {
    // Allow mobile apps, Postman etc
    if (!origin) return callback(null, true); 

    const isAllowed = allowedOrigins.some((allowed) =>
      typeof allowed === "string"
        ? allowed === origin
        : allowed.test(origin)
    );

    if (isAllowed) {
      return callback(null, true);
    }
    console.log("❌ CORS blocked:", origin);
    return callback(new Error("Not allowed by CORS"));
  },

  credentials: true,

  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],

  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOption))
const port=process.env.PORT
app.use(express.json());
app.use(express.urlencoded({extended:true}));

 app.use("/auth",emailRouter)  
app.listen(port,(res,req)=>{
    console.log(`server connected at port ${port}`);
}) 