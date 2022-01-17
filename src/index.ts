import {ExtensionContext, LanguageClient, services, window} from 'coc.nvim';

export async function activate(context: ExtensionContext): Promise<void> {
  const client = new LanguageClient('coc-gunk', 'coc-gunk', {
    command: 'gunkls',
    // args: ['-pprof', '9999']
  }, {
    documentSelector: ['gunk'],
    outputChannelName: 'coc-gunk',
  })
  context.subscriptions.push(services.registLanguageClient(client));
}
