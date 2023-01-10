import { WorkshiftControllerService } from '../services';

export const getWorkshift = async () => {
    const data = await
        WorkshiftControllerService
            .workshiftControllerFind(
                `{"where":{"status": true}}`
            )
    return data
}