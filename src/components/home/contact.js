export const WHATSAPP_NUMBER = '254762677923'

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const CONTACT_LINK = whatsappLink(
  'Hello Byma, I would like to discuss a project.'
)

export const RESUME_LINK =
  'https://drive.google.com/file/d/1yFLi32q3UE26ZRoLQrjitQNEfz7fpoIe/view?usp=sharing'

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/BmKaranja' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/b-karanja' },
  { label: 'Instagram', href: 'https://www.instagram.com/it.s._bryan/' },
]

export const btnPrimary =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

export const btnSecondary =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
