const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.servienza.com";

export interface CTAPayload {
  email: string;
  name?: string;
  services?: string;
  challenges?: string;
  message?: string;
  source?: string;
}

export async function submitCTA(payload: CTAPayload): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE_URL}/v1/cta`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) return true;
    throw new Error("CTA submission failed");
  } catch {
    // Fallback: mailto
    const subject = encodeURIComponent(
      `Servienza Lead: ${payload.name || payload.email} — ${payload.source || "Website"}`
    );
    const body = encodeURIComponent(
      [
        `Email: ${payload.email}`,
        payload.name ? `Name: ${payload.name}` : "",
        payload.services ? `Interested in: ${payload.services}` : "",
        payload.challenges ? `Challenges: ${payload.challenges}` : "",
        payload.message ? `Message: ${payload.message}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    );
    window.open(`mailto:at@qumify.com?subject=${subject}&body=${body}`);
    return true;
  }
}
