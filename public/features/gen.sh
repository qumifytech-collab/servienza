#!/bin/bash
set -e
DIR="/sessions/sharp-quirky-goldberg/mnt/servienza2/public/features"
W=1200
H=750

# Color palette matching the app
BG="#0d1221"
CARD="#151d30"
SIDEBAR="#111827"
ACCENT="#6366f1"
ACCENT2="#4f46e5"
GREEN="#22c55e"
YELLOW="#eab308"
RED="#ef4444"
BLUE="#3b82f6"
TEXT="#e2e8f0"
MUTED="#64748b"
BORDER="#1e293b"

draw_sidebar() {
  # Sidebar background
  echo "-fill '$SIDEBAR' -draw 'rectangle 0,0 220,$H'"
  # Logo area
  echo "-fill '$ACCENT' -draw 'roundrectangle 20,18 48,46 8,8'"
  echo "-fill white -pointsize 14 -annotate +58+38 'Sunshine Pool Services'"
  echo "-fill '$MUTED' -pointsize 10 -annotate +58+54 'Enterprise'"
  # Nav items
  local items=("Dashboard" "Company" "Customer" "Schedules" "Service Requests" "Accounts" "Staff Management" "Tracing" "Billing")
  local y=100
  for item in "${items[@]}"; do
    echo "-fill '$MUTED' -pointsize 13 -annotate +45+$y '$item'"
    y=$((y + 36))
  done
}

highlight_nav() {
  local idx=$1
  local y=$((82 + idx * 36))
  echo "-fill '$ACCENT' -draw 'roundrectangle 12,$y 210,$((y+30)) 6,6'"
  local items=("Dashboard" "Company" "Customer" "Schedules" "Service Requests" "Accounts" "Staff Management" "Tracing" "Billing")
  echo "-fill white -pointsize 13 -annotate +45+$((y+20)) '${items[$idx]}'"
}

# ==========================================
# 1. CUSTOMER MANAGEMENT (screenshot-style)
# ==========================================
convert -size ${W}x${H} xc:"$BG" \
  $(draw_sidebar) \
  $(highlight_nav 2) \
  -fill white -pointsize 26 -annotate +260+55 "Customer Management" \
  -fill "$MUTED" -pointsize 12 -annotate +260+78 "Manage your customers, service locations, billing details, and schedules." \
  -fill "$ACCENT" -draw "roundrectangle 950,32 1140,62 8,8" \
  -fill white -pointsize 12 -annotate +975+52 "Add customer" \
  -fill "$BORDER" -draw "roundrectangle 260,100 1160,690 12,12" \
  -fill "$CARD" -draw "roundrectangle 260,100 1160,140 12,12" \
  -fill "$MUTED" -pointsize 12 \
  -annotate +280+126 "Name" \
  -annotate +480+126 "Email" \
  -annotate +700+126 "Phone" \
  -annotate +870+126 "Address" \
  $(for i in 0 1 2 3 4 5 6 7; do
    y=$((155 + i * 68))
    names=("Heather Smith" "Jerry Jimenez" "Maria Foster" "Dennis Ross" "Catherine Long" "Jack Myers" "Janet Patel" "Patrick Sanders")
    emails=("heather.smith@test.com" "jerry.jimenez@test.com" "maria.foster@test.com" "dennis.ross@test.com" "catherine.long@test.com" "jack.myers@test.com" "janet.patel@test.com" "patrick.sanders@test.com")
    phones=("(239) 555-0199" "(239) 555-0198" "(239) 555-0197" "(239) 555-0196" "(239) 555-0195" "(239) 555-0194" "(239) 555-0193" "(239) 555-0192")
    addrs=("8080 Immokalee Rd, Naples" "7070 Daniels Pkwy, Fort Myers" "6060 McGregor Blvd, Fort Myers" "5050 Colonial Blvd, Fort Myers" "4040 Pine Island Rd, Cape Coral" "3030 Del Prado Blvd, Cape Coral" "2020 Estero Blvd, Fort Myers" "1010 Bonita Beach Rd, Bonita")
    echo "-fill '$BORDER' -draw 'line 260,$y 1160,$y'"
    echo "-fill '$BLUE' -pointsize 13 -annotate +280+$((y+25)) '${names[$i]}'"
    echo "-fill '$TEXT' -pointsize 11 -annotate +480+$((y+25)) '${emails[$i]}'"
    echo "-fill '$TEXT' -pointsize 11 -annotate +700+$((y+25)) '${phones[$i]}'"
    echo "-fill '$MUTED' -pointsize 11 -annotate +870+$((y+25)) '${addrs[$i]}'"
  done) \
  "$DIR/feat-customer-management.png"

echo "1/12 Customer Management done"
