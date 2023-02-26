export const FAKE_USER = {
  firstName: 'Caleb',
  lastName: 'Porzio',
  username: 'caleb',
  avatar:
    'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
};

export const FAKE_EMAILS = [
  {
    id: 0,
    subject: 'Bytes: The Ng-Renaissance Fair',
    body: 'Todays issue: The Ng-Renaissance Fair, JavaScript adrenaline junkies, and flashbacks of cheating at high school math.',
  },
  {
    id: 1,
    subject: 'How to get people to hire you',
    body: 'This is how you actually stand out.',
  },
  {
    id: 2,
    subject: 'You can design your business as you want',
    body: 'As tiny Internet solopreneurs, we can design our business as we want.',
  },
];

const LOTS_OF_EMAILS = Array(1000)
  .fill(0)
  .map((_) => {
    let email = FAKE_EMAILS[Math.floor(Math.random() * FAKE_EMAILS.length)];
    return {
      ...email,
      id: Math.random(),
      preview: email.body.substring(0, 46),
    };
  });

// Generate a preview
FAKE_EMAILS.forEach((email) => (email.preview = email.body.substring(0, 46)));

export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'test' && password === 'pass') {
        resolve(FAKE_USER);
      } else {
        reject({ message: 'Invalid username or password' });
      }
    }, 300);
  });
}

export function fetchEmails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(FAKE_EMAILS);
    }, 300);
  });
}

export function fetchLatestEmails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        FAKE_EMAILS.map((e) => ({
          ...e,
          id: Math.random(),
        })).slice(0, Math.floor(Math.random() * (FAKE_EMAILS.length + 1)))
      );
    }, 300);
  });
}
