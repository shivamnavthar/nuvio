import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  // Initialize Gemini client (server-side only, hiding API key from client)
  let ai: GoogleGenAI | null = null;
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }

  // API Route: AI Advisor Report (Michel-star level restaurateur consulting)
  app.post("/api/ai-advisor", async (req, res) => {
    try {
      const { concept, locations, bottleneck, posSystem } = req.body;
      
      if (!concept || !bottleneck) {
        return res.status(400).json({ error: "Missing required fields: concept and bottleneck" });
      }

      if (!ai) {
        // Return premium structured simulated advisory report in offline / fallback mode
        return res.json({
          advice: `### 🌟 High-Performance Operations Audit: ${concept.toUpperCase()}
*Platform is running in standalone demonstration mode. Below code reflects custom high-impact recommendations formulated for your specific parameters:*

#### 📊 1. Tactical Staffing & Forecasting Plan
Your severe bottleneck with **${bottleneck.toLowerCase()}** at your **${locations || 1} location(s)** points to a clear structural optimization opportunity. To solve this, Aura AI forecasts hourly dine-in density and delivery spikes using historical POS trends in **${posSystem || 'Toast'}**. By shifting preparation blocks 90 minutes earlier, food-prep workloads are smoothed out before peak dine-in rush hours (7:00 PM - 9:00 PM). This staffing reallocation will trim labor costs by an estimated **14.2%** while decreasing turn times.

#### 🥩 2. Smart Stock & Inventory Strategy
Inventory wastage and delivery delays are mitigated by Aura's neural stock replenishment models. For a high-caliber **${concept}** kitchen, stock safety buffers for key perishables should be recalibrated dynamically based on regional food festival calendars, weather anomalies, and social index trends. We recommend scheduling a direct POS sync to trigger alerts 48 hours before high-occupancy event markers.

#### 🚀 3. Revenue & Client Growth Accelerators
Leverage high-intent reservation flow patterns to automate client retention. By utilizing automated guest summary recommendations, your team can personalize dining notes and past preferences across all location profiles. Dynamic table pacing recommendations will increase table turns by **1.1x** during peak weekend volume blocks without rushed guest perception.`,
          simulated: true
        });
      }

      const prompt = `You are an elite, Michelin-star restaurant operations consultant and B2B SaaS AI expert.
Create a premium, hyper-focused corporate operations audit report for a restaurateur running:
- Concept/Style of Dining: ${concept}
- Total Active Locations: ${locations || 1}
- Major Operational Bottleneck or Pain Point: ${bottleneck}
- POS System: ${posSystem || "Not Specified"}

Structure your response strictly in pristine, elegant Markdown. Do not write introductory statements or conversational filler like "Sure, here is your report." Go straight into the markdown sections:
1. "### 🌟 High-Performance Operations Audit: [Concept Name in All Caps]"
2. "#### 📊 1. Tactical Staffing & Forecasting Plan"
   Write an actionable recommendation to solve their specific bottleneck based on hourly occupancy forecasting, peak period buffers, and specific dynamic shifts. Keep it deeply specific and professional.
3. "#### 🥩 2. Smart Stock & Inventory Strategy"
   Detail how they should optimize inventory waste, prep times, or stock levels tailored to their style of food (e.g. if they are fine dining, high volume, grill, bakery, etc.).
4. "#### 🚀 3. Revenue & Client Growth Accelerators"
   Specify how to leverage AI-driven reservation analytics, dynamic booking pacing, and guest summary notes to directly increase table turns and margin capture.

Make it sound sophisticated, analytical, and tailored to senior restaurant group executives. Keep it highly relevant, concise, and professional.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
      });

      res.json({ advice: response.text });
    } catch (error: any) {
      console.error("Gemini API Error in /api/ai-advisor:", error);
      res.status(500).json({ error: error.message || "Failed to generate report" });
    }
  });

  // API Route for Booking Demo Lead Capture
  app.post("/api/book-demo", (req, res) => {
    const { name, email, restaurantName, locations, posSystem, phone } = req.body;
    if (!name || !email || !restaurantName) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    
    console.log(`NEW SEED LEAD LOGIC INJECTED SUCCESSFULLY:`, { name, email, restaurantName, locations, posSystem, phone });
    
    res.json({
      success: true,
      message: `Thank you, ${name}. Your executive operational demo is booked. A gourmet systems designer will reach out at ${phone || email} within 12 business hours.`,
      leadId: `AURA-${Math.floor(100000 + Math.random() * 900000)}`
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express and Vite server running on ports ${PORT}`);
  });
}

startServer();
