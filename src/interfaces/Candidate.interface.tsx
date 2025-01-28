// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
  login: string;
  name: string;
  location: string;
  avatar_url: string; // URL to the avatar image
  email: string;
  html_url: string;
  company