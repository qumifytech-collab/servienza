import { withIcons } from '@/lib/icons'

export default function FinalCta() {
  return (
    <div dangerouslySetInnerHTML={{ __html: withIcons("<section class=\"sec-sm\" id=\"contact\">\n  <div class=\"wrap\">\n    <div class=\"final reveal\">\n      <span class=\"eyebrow center\" style=\"color:#5FE3D0\">Ready when you are</span>\n      <h2 class=\"h-section\" style=\"margin-top:16px\">Your crew. Your jobs. Your money. All in one place.</h2>\n      <p class=\"lead\">Book a free 30-minute call and we'll show you exactly where Servienza saves you time and money.</p>\n      <div class=\"hero-cta\">\n        <a class=\"btn btn-accent btn-lg\" href=\"mailto:at@servienza.com?subject=Servienza%20free%20trial\">Start free trial <svg class=\"icon\" data-l=\"arrow-right\"></svg></a>\n        <a class=\"btn btn-ghost btn-lg\" href=\"mailto:at@servienza.com?subject=Book%20a%20free%2030-minute%20call\">Book a free call</a>\n      </div>\n    </div>\n  </div>\n</section>") }} />
  )
}
