import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export interface SectionDataTable extends ComponentProps<"div"> {
	data: Array<{ key: string; value: string }>;
}

export const SectionDataTable = ({
	data,
	className,
	...props
}: SectionDataTable) => {
	return (
		<div
			className={twMerge(
				"overflow-hidden rounded-lg border border-zinc-700",
				className,
			)}
			{...props}
		>
			<table className="w-full">
				{data.map((item) => (
					<tr key={item.key} className="border-b border-zinc-700 las-">
						<td className="p-3 font-medium text-sm text-zinc-400 bg-zinc-800/50 border-r  border-zinc-700">
							{item.key}
						</td>
						<td className="p-3 text-sm font-mono text-zinc-300">
							{item.value}
						</td>
					</tr>
				))}
			</table>
		</div>
	);
};
