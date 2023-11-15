import GitHub from '@auth/core/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { SvelteKitAuth } from '@auth/sveltekit';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import prisma from '$lib/client/prisma';

export const handle = SvelteKitAuth({
	providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
	adapter: PrismaAdapter(prisma)
});
