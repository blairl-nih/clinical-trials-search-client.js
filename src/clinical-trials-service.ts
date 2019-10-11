import { TermResults, InterventionResults, DiseaseResults, ClinicaltrialResults, ClinicaltrialResult } from './model';

/**
 * This class represents the methods to accessing a CTAPI service
 */
export interface ClinicalTrialsService {

    /**
     * Gets terms from the terms endpoint
     * 
     * @param termType The term type
     * @param additionalParams Additional params to use in narrowing endpoint call.  Add search keywords here & sort options. See API for additional params.
     * @param sort The sort order
     * @param size The number of terms to return. NOTE: API allows max of 100
     * @param from The 0-based offset of where to start fetching terms from.
     */
    getTerms(termType: string, additionalParams?:any, size?:number, from?:number): Promise<TermResults>;

    /**
     * Gets interventions from the interventions endpoint
     * 
     * @param category The high-level type of the term (agent, agent_category, other) (OPTIONAL)
     * @param name Type ahead support to search for the interventions (OPTIONAL)
     * @param size The number of interventions to return (OPTIONAL)
     * @param additionalParams Additional Parameters like interventionType (OPTIONAL)
     * @param sort The sort order of the results (OPTIONAL)
     * @param order The direction to sort the results (OPTIONAL)
     */
    getInterventions(category?: string|string[], name?: string, size?:number, additionalParams?:any, sort?:string, order?:string ): Promise<InterventionResults>;

    /**
     * Gets diseases from the diseases endpoint
     * 
     * @param {string} menuType The menu type (can be "maintype", "subtype", "stage", or "finding") (REQUIRED)
     * @param {string} [diseaseAncestorIDs] One or more ancestor disease IDs for a given disease (OPTIONAL)
     * @param {*} [additionalParams] Additional parameters (OPTIONAL)
     * @returns {Promise<DiseaseResults>} 
     * @memberof ClinicalTrialsService
     */
    getDiseases(menuType:string|string[], diseaseAncestorIDs?:string | string[], additionalParams?:any): Promise<DiseaseResults>;

    /**
     * Gets the set of trials matching a set of search criteria.
     * 
     * @param {string} document JSON document containing a set of search criteria.
     * @returns {Promise<ClinicaltrialResults>}
     */
    searchTrials(document: string): Promise<ClinicaltrialResults>;
}

