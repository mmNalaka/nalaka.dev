import { Session, SupabaseClient } from '@supabase/supabase-js';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		interface Platform {
			session: Session | null;
		}
		interface Locals {
			supabase: SupabaseClient;
			getSession(): Promise<Session | null>;
		}
	}
}

export {};
