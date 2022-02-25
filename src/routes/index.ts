import type { Advice } from "$lib/models";

/**
* @type {import('@sveltejs/kit').RequestHandler}
*/
export const get = async () => {
    //   const res = await something;

    const advice: Advice = {
        id: 117,
        content: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    }
    // if (res) {
    return {
        body: {
            advice
        }
    };
    // }
}