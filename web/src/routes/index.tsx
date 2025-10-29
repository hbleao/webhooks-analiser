import { createFileRoute } from "@tanstack/react-router";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import { CodeBlock, SectionTitle, Sidebar } from "../components";
import { SectionDataTable } from "../components/section-data-table";
import { WebhookDetailHeader } from "../components/webhook-detail-header";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	const overviewData = [
		{ key: "Method", value: "POST" },
		{ key: "Status code", value: "200" },
		{ key: "Content-Type", value: "application/json" },
		{ key: "Content-Length", value: "289344 bytes" },
	];

	return (
		<div className="h-screen bg-zinc-900">
			<PanelGroup direction="horizontal">
				<Panel defaultSize={20} minSize={15} maxSize={40}>
					<Sidebar />
				</Panel>
				<PanelResizeHandle className="w-px bg-zinc-700 hover:bg-zinc-600 transition-colors duration-150" />
				<Panel defaultSize={80} minSize={60}>
					<div className="flex h-full flex-col">
						<WebhookDetailHeader />
						<div className="flex-1 overflow-y-auto">
							<div className="space-y-6 p-6">
								<div className="space-y-4">
									<SectionTitle>Request Overview</SectionTitle>
									<SectionDataTable data={overviewData} />
								</div>

								<div className="space-y-4">
									<SectionTitle>Query Parameters</SectionTitle>
									<SectionDataTable data={overviewData} />
								</div>

								<div className="space-y-4">
									<SectionTitle>Headers</SectionTitle>
									<SectionDataTable data={overviewData} />
								</div>

								<div className="space-y-4">
									<SectionTitle>Request Bpdy</SectionTitle>
									<CodeBlock
										code={JSON.stringify(overviewData, null, 2)}
										language="json"
									/>
								</div>
							</div>
						</div>
					</div>
				</Panel>
			</PanelGroup>
		</div>
	);
}
