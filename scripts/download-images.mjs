#!/usr/bin/env node
/**
 * Download industry-specific images for the Servienza marketing site from Pexels.
 * Run: node scripts/download-images.mjs
 *
 * All images are from Pexels (pexels.com) — free for commercial use,
 * no attribution required.
 */

import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public");

// Pexels CDN URLs — publicly accessible, no API key needed
const photos = [
  // ── Section images (used across FeaturesGrid, WhyChooseUs, CaseStudy, etc.) ──
  {
    url: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1200",
    filename: "image1.jpg",
    desc: "Plumber installing pipe fittings — service documentation",
  },
  {
    url: "https://images.pexels.com/photos/6728933/pexels-photo-6728933.jpeg?auto=compress&cs=tinysrgb&w=1200",
    filename: "image2.jpg",
    desc: "Man mowing lawn — landscaping & recurring services",
  },
  {
    url: "https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=1200",
    filename: "image3.jpg",
    desc: "HVAC technician inspecting outdoor unit — GPS & tracking",
  },
  {
    url: "https://images.pexels.com/photos/4440541/pexels-photo-4440541.jpeg?auto=compress&cs=tinysrgb&w=1200",
    filename: "image4.jpg",
    desc: "Professional cleaner mopping floor — cleaning service",
  },
  {
    url: "https://images.pexels.com/photos/6816855/pexels-photo-6816855.jpeg?auto=compress&cs=tinysrgb&w=1200",
    filename: "image5.jpg",
    desc: "Person grooming a pet — pet grooming service",
  },
  {
    url: "https://images.pexels.com/photos/21812146/pexels-photo-21812146.jpeg?auto=compress&cs=tinysrgb&w=1200",
    filename: "image6.jpg",
    desc: "Electrician in helmet working with cables — electrical service",
  },
  {
    url: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1200",
    filename: "image7.jpg",
    desc: "Analytics graph on laptop screen — reports & dashboards",
  },
  {
    url: "https://images.pexels.com/photos/8293678/pexels-photo-8293678.jpeg?auto=compress&cs=tinysrgb&w=1200",
    filename: "image8.jpg",
    desc: "Man in safety vest doing house inspection — handyman & property mgmt",
  },

  // ── Hero / background images (used in who-we-are, Testimonial) ──
  {
    url: "https://images.pexels.com/photos/8486978/pexels-photo-8486978.jpeg?auto=compress&cs=tinysrgb&w=1200",
    filename: "hero_image.jpg",
    desc: "Handywoman with plumber's wrench — professional service worker",
  },

  // ── Hero carousel images (auto-rotating industry showcase) ──
  {
    url: "https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=1400",
    filename: "carousel_hvac.jpg",
    desc: "HVAC technician inspecting outdoor unit",
  },
  {
    url: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1400",
    filename: "carousel_plumbing.jpg",
    desc: "Plumber installing pipe fittings",
  },
  {
    url: "https://images.pexels.com/photos/6728933/pexels-photo-6728933.jpeg?auto=compress&cs=tinysrgb&w=1400",
    filename: "carousel_landscaping.jpg",
    desc: "Man mowing lawn — landscaping service",
  },
  {
    url: "https://images.pexels.com/photos/6816855/pexels-photo-6816855.jpeg?auto=compress&cs=tinysrgb&w=1400",
    filename: "carousel_grooming.jpg",
    desc: "Person grooming a pet — pet grooming",
  },
  {
    url: "https://images.pexels.com/photos/4440541/pexels-photo-4440541.jpeg?auto=compress&cs=tinysrgb&w=1400",
    filename: "carousel_cleaning.jpg",
    desc: "Professional cleaner — cleaning service",
  },
  {
    url: "https://images.pexels.com/photos/21812146/pexels-photo-21812146.jpeg?auto=compress&cs=tinysrgb&w=1400",
    filename: "carousel_electrical.jpg",
    desc: "Electrician working with cables — electrical service",
  },
  {
    url: "https://images.pexels.com/photos/8293678/pexels-photo-8293678.jpeg?auto=compress&cs=tinysrgb&w=1400",
    filename: "carousel_handyman.jpg",
    desc: "Home inspector in safety vest — property & handyman",
  },
];

async function downloadImage(url, filepath) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  writeFileSync(filepath, buffer);
  return buffer.length;
}

async function main() {
  console.log("Downloading industry-specific images for Servienza...\n");

  let success = 0;
  let failed = 0;

  for (const photo of photos) {
    try {
      process.stdout.write(`  ${photo.filename} — ${photo.desc}...`);
      const filepath = join(PUBLIC_DIR, photo.filename);
      const size = await downloadImage(photo.url, filepath);
      console.log(` OK (${(size / 1024).toFixed(0)} KB)`);
      success++;
    } catch (err) {
      console.log(` ERROR: ${err.message}`);
      failed++;
    }
  }

  console.log(`\n${success} downloaded, ${failed} failed.`);
  if (success > 0) {
    console.log("Images saved to public/");
  }
}

main();
