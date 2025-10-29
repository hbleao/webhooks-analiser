import { Badge } from "./ui/badge";

export const WebhookDetailHeader = () => {
	return (
		<div className="space-y-4 border-b border-zinc-700 p-6">
			<div className="flex items-center gap-3">
				<Badge text="POST" />
				<span className="text-lg font-medium text-zinc-300">/video/status</span>
			</div>
			<div className="flex items-center gap-2">
				<div className="flex items-center gap-2 text-sm text-zinc-400">
					<span>From IP</span>
					<span className="font-mono">123.456.987.30</span>
				</div>
				<span className="w-px h-4 bg-zinc-700" />
				<div className="flex items-center gap-2 text-sm text-zinc-400">
					<span>Hora:</span>
					<span>18 de abril, 14:00:00</span>
				</div>
			</div>
		</div>
	);
};
