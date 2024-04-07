import { handleAuth } from '@auth0/nextjs-auth0';
console.log('route check')
export const GET = handleAuth();