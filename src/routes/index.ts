import type { Advice } from '$lib/models';
import { adviceService } from '$lib/services/advice.service';

let cached: Advice[] = [];

/**
* @type {import('@sveltejs/kit').RequestHandler}
*/
export const get = async (): Promise<{ body: { advice: Advice } }> => {
    if (cached.length > 20) {
        const index = Math.floor(Math.random() * cached.length);
        return { body: { advice: cached[index] } };
    }

    const advice = (await adviceService.randomAdvice()) as Advice;
    cached.push(advice);

    return {
        body: {
            advice
        }
    };
}