import { ExtensionContext, LanguageClient, services, window, workspace } from 'coc.nvim';

export async function activate(context: ExtensionContext): Promise<void> {
  const config = workspace.getConfiguration('coc-gunk');
  if (!config.get<boolean>('enable', true)) {
    return;
  }
  const cmd = config.get<string>('server.command', 'gunkls');
  const args = config.get<string[]>('server.args', []);
  await window.showPrompt(JSON.stringify({cmd, args}))

  const client = new LanguageClient(
    'coc-gunk',
    'coc-gunk',
    {
      command: cmd,
      args: args,
    },
    {
      documentSelector: ['gunk'],
      outputChannelName: 'coc-gunk',
    }
  );
  context.subscriptions.push(services.registLanguageClient(client));
}
