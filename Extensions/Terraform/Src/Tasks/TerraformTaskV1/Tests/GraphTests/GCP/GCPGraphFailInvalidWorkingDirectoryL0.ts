import { TerraformCommandHandlerGCP } from './../../../src/gcp-terraform-command-handler';
import tl = require('azure-pipelines-task-lib');

let terraformCommandHandlerGCP: TerraformCommandHandlerGCP = new TerraformCommandHandlerGCP();

export async function run() {
    try {
        await terraformCommandHandlerGCP.graph();
    } catch(error) {
        tl.setResult(tl.TaskResult.Failed, 'GCPGraphFailInvalidWorkingDirectoryL0 should have succeeded but failed with error.');
    }
}

run();