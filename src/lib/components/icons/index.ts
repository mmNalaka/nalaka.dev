import type { Icon as LucideIcon } from "lucide-svelte";
import {
	AlertTriangle,
	ArrowRight,
	Check,
	ChevronLeft,
	ChevronRight,
	ClipboardCheck,
	Copy,
	CreditCard,
	File,
	FileText,
	HelpCircle,
	Image,
	Laptop,
	Loader2,
	Moon,
	MoreVertical,
	Pizza,
	Plus,
	Settings,
	SunMedium,
	Trash,
	Twitter,
	User,
	X
} from "lucide-svelte";

import GitHub from "./Github.svelte";
import Google from "./Google.svelte";


export type Icon = LucideIcon;

export const Icons = {
	close: X,
	spinner: Loader2,
	chevronLeft: ChevronLeft,
	chevronRight: ChevronRight,
	trash: Trash,
	post: FileText,
	page: File,
	media: Image,
	settings: Settings,
	billing: CreditCard,
	ellipsis: MoreVertical,
	add: Plus,
	warning: AlertTriangle,
	user: User,
	arrowRight: ArrowRight,
	help: HelpCircle,
	pizza: Pizza,
	twitter: Twitter,
	check: Check,
	copy: Copy,
	copyDone: ClipboardCheck,
	sun: SunMedium,
	moon: Moon,
	laptop: Laptop,
	gitHub: GitHub,
	google: Google,
};