const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

require("dotenv").config();

const app = express();
const port = Number.parseInt(process.env.PORT || "3000", 10);
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

app.use(cors());
app.use(express.json());

const supabaseClient = supabaseUrl && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null;

function requireSupabase(res) {
  if (supabaseClient) {
    return true;
  }

  res.status(503).json({
    error: "Supabase environment variables are not configured on the server."
  });

  return false;
}

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    supabaseConfigured: Boolean(supabaseClient)
  });
});

app.post("/create-order", async (req, res) => {
  if (!requireSupabase(res)) {
    return;
  }

  const {
    userId,
    fileName,
    status = "pending",
    material = null,
    quantity = null,
    totalWeight = null,
    totalPrice = null
  } = req.body || {};

  if (!userId || !fileName) {
    res.status(400).json({
      error: "userId and fileName are required."
    });
    return;
  }

  const { data, error } = await supabaseClient
    .from("orders")
    .insert([
      {
        user_id: userId,
        file_name: fileName,
        status,
        material,
        quantity,
        total_weight: totalWeight,
        total_price: totalPrice
      }
    ])
    .select()
    .single();

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.json({
    success: true,
    order: data
  });
});

app.get("/orders", async (req, res) => {
  if (!requireSupabase(res)) {
    return;
  }

  const { data, error } = await supabaseClient
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.json({
    success: true,
    orders: data
  });
});

app.listen(port, () => {
  console.log(`RapidLayer backend running on port ${port}`);
});
