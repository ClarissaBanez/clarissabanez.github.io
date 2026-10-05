// Your two MailerLite signup forms. Edit the wording here.
// `account` and `formId` come from your MailerLite embed code, so leave them as they are.
const account = '1695099'

export const forms = {
  // Contact page
  newsletter: {
    account,
    formId: '161101732282107344',
    layout: 'inline',
    title: 'Notes from the Studio',
    text: ['A monthly glimpse into my practice, process, and ideas.', 'Sign up to receive the next note.'],
    button: 'Sign up',
    note: 'You can unsubscribe anytime.',
    successTitle: 'Thank you!',
    successText: 'Thank you for joining me in the Studio. Your first note will arrive in your inbox soon.',
  },
  // Collect page
  catalogue: {
    account,
    formId: '197872805974378424',
    layout: 'stacked',
    title: 'Get the Latest Catalogue',
    text: ['New works, available originals, and collector information, sent directly to your inbox.'],
    button: 'Get the Catalogue',
    note: '',
    successTitle: 'Thank you for your interest!',
    successText: 'The latest Catalogue is on its way to your inbox.',
  },
}
