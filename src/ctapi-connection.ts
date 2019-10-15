
/**
 * Interface for clinical trials API connections
 */
export interface CTAPIConnection {

    getRequest(path: string, params: any, headers?: any): Promise<any>
    postRequest(path: string, document: string, headers?: any): Promise<any>
}