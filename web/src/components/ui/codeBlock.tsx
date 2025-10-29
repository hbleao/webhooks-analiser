import { type ComponentProps, useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { twMerge } from "tailwind-merge";

interface CodeBlockProps extends ComponentProps<"div"> {
	code: string;
	language: string;
}

export const CodeBlock = ({
	className,
	code,
	language = "json",
	...props
}: CodeBlockProps) => {
	const [parsedCode, setParsedCode] = useState("");

	useEffect(() => {
		if (code) {
			codeToHtml(code, { lang: language, theme: "vesper" }).then((parsed) =>
				setParsedCode(parsed),
			);
		}
	}, [code, language]);

	return (
		<div
			className={twMerge(
				"relative rounded-lg border bg-zinc-700 overflow-x-auto",
				className,
			)}
			{...props}
		>
			{/** biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
			<div dangerouslySetInnerHTML={{ __html: parsedCode }} />
		</div>
	);
};
