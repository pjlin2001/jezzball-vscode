const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

class JezzBallViewProvider {
  constructor(extensionUri) {
    this._extensionUri = extensionUri;
  }

  resolveWebviewView(webviewView) {
    webviewView.webview.options = {
      enableScripts: true,
      retainContextWhenHidden: true
    };
    const htmlPath = path.join(this._extensionUri.fsPath, 'media', 'jezzball.html');
    webviewView.webview.html = fs.readFileSync(htmlPath, 'utf8');
  }
}

function activate(context) {
  const provider = new JezzBallViewProvider(context.extensionUri);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider('jezzball.gameView', provider, {
      webviewOptions: { retainContextWhenHidden: true }
    })
  );

  const cmd = vscode.commands.registerCommand('jezzball.play', () => {
    vscode.commands.executeCommand('jezzball.gameView.focus');
  });
  context.subscriptions.push(cmd);
}

function deactivate() {}

module.exports = { activate, deactivate };
