export const ContactTypes = ["contact", "quote", "partnership", "sponsoring"] as const;
export type ContactType = (typeof ContactTypes)[number];

export const SUBJECT_MAX_LENGTH = 200;
export const MESSAGE_MAX_LENGTH = 800;

export interface ContactSendBody {
  type: ContactType;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}
