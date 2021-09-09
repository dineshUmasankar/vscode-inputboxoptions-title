import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('vscode-inputboxoptions-title.openInputBox', () => {
		vscode.window.showInputBox({
			title: "Testing InputBoxOptions#title",
			value: "Sample Text"
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
