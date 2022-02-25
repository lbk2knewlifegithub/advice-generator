import type { Advice } from '$lib/models/advice.model';
import { adviceService } from '$lib/services/advice.service';
import { writable } from "svelte/store";


/**
 * - Advice Store
 */
interface AdviceState {
    advice: Advice | undefined;
    loading: boolean;
}

/**
 * - Initial State
 */
const initialState: AdviceState = {
    advice: undefined,
    loading: false,
}

/**
 * - Advice Store
 */
export const adviceStore = createAdviceStore();



/**
 * - Create Advice Store 
 * @returns 
 */
function createAdviceStore() {
    const { set, update, subscribe } = writable<AdviceState>(initialState);

    return {
        set, update, subscribe,

        /**
         * - Set Loading State
         * @param loading 
         * @returns 
         */
        setLoading: (loading: boolean) => update(state => ({ ...state, loading })),

        /**
         * - Set Advice
         * @param advice 
         * @returns 
         */
        setAdvice: (advice: Advice) => update(state => ({ ...state, advice })),


        /**
         * - RAndom Advice
         */
        randomAdvice: async () => {
            // Set Loading To True
            adviceStore.setLoading(true);

            // Fetch Random Advice
            const advice = await adviceService.randomAdvice();

            // Set Loading To False
            adviceStore.setLoading(false)

            // Set Advice To Store
            adviceStore.setAdvice(advice)
        }
    }
}

