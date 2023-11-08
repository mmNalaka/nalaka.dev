export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			comments: {
				Row: {
					author_id: string | null;
					content: string | null;
					created_at: string | null;
					id: number;
					parent_id: number | null;
					post_id: number | null;
					updated_at: string | null;
				};
				Insert: {
					author_id?: string | null;
					content?: string | null;
					created_at?: string | null;
					id?: never;
					parent_id?: number | null;
					post_id?: number | null;
					updated_at?: string | null;
				};
				Update: {
					author_id?: string | null;
					content?: string | null;
					created_at?: string | null;
					id?: never;
					parent_id?: number | null;
					post_id?: number | null;
					updated_at?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'comments_author_id_fkey';
						columns: ['author_id'];
						referencedRelation: 'users';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'comments_parent_id_fkey';
						columns: ['parent_id'];
						referencedRelation: 'comments';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'comments_post_id_fkey';
						columns: ['post_id'];
						referencedRelation: 'posts';
						referencedColumns: ['id'];
					}
				];
			};
			post_tags: {
				Row: {
					post_id: number;
					tag_id: number;
				};
				Insert: {
					post_id: number;
					tag_id: number;
				};
				Update: {
					post_id?: number;
					tag_id?: number;
				};
				Relationships: [
					{
						foreignKeyName: 'post_tags_post_id_fkey';
						columns: ['post_id'];
						referencedRelation: 'posts';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'post_tags_tag_id_fkey';
						columns: ['tag_id'];
						referencedRelation: 'tags';
						referencedColumns: ['id'];
					}
				];
			};
			posts: {
				Row: {
					author_id: string | null;
					content: string | null;
					created_at: string | null;
					excerpt: string | null;
					id: number;
					title: string | null;
					updated_at: string | null;
					views: number | null;
				};
				Insert: {
					author_id?: string | null;
					content?: string | null;
					created_at?: string | null;
					excerpt?: string | null;
					id?: never;
					title?: string | null;
					updated_at?: string | null;
					views?: number | null;
				};
				Update: {
					author_id?: string | null;
					content?: string | null;
					created_at?: string | null;
					excerpt?: string | null;
					id?: never;
					title?: string | null;
					updated_at?: string | null;
					views?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: 'posts_author_id_fkey';
						columns: ['author_id'];
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			profiles: {
				Row: {
					avatar_url: string | null;
					full_name: string | null;
					id: string;
					updated_at: string | null;
					username: string | null;
					website: string | null;
				};
				Insert: {
					avatar_url?: string | null;
					full_name?: string | null;
					id: string;
					updated_at?: string | null;
					username?: string | null;
					website?: string | null;
				};
				Update: {
					avatar_url?: string | null;
					full_name?: string | null;
					id?: string;
					updated_at?: string | null;
					username?: string | null;
					website?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'profiles_id_fkey';
						columns: ['id'];
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			snippest_tags: {
				Row: {
					snippet_id: number;
					tag_id: number;
				};
				Insert: {
					snippet_id: number;
					tag_id: number;
				};
				Update: {
					snippet_id?: number;
					tag_id?: number;
				};
				Relationships: [
					{
						foreignKeyName: 'snippest_tags_snippet_id_fkey';
						columns: ['snippet_id'];
						referencedRelation: 'snippets';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'snippest_tags_tag_id_fkey';
						columns: ['tag_id'];
						referencedRelation: 'tags';
						referencedColumns: ['id'];
					}
				];
			};
			snippets: {
				Row: {
					author_id: string | null;
					code: string | null;
					created_at: string | null;
					id: number;
					language: string | null;
					updated_at: string | null;
					views: number | null;
				};
				Insert: {
					author_id?: string | null;
					code?: string | null;
					created_at?: string | null;
					id?: never;
					language?: string | null;
					updated_at?: string | null;
					views?: number | null;
				};
				Update: {
					author_id?: string | null;
					code?: string | null;
					created_at?: string | null;
					id?: never;
					language?: string | null;
					updated_at?: string | null;
					views?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: 'snippets_author_id_fkey';
						columns: ['author_id'];
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			tags: {
				Row: {
					id: number;
					name: string | null;
				};
				Insert: {
					id?: never;
					name?: string | null;
				};
				Update: {
					id?: never;
					name?: string | null;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			Role: 'USER' | 'ADMIN';
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
