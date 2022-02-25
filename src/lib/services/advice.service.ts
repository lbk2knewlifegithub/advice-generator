import type { Advice, AdviceEntity } from '$lib/models';


interface AdviceService {
    randomAdvice(): Promise<Advice>;
}

class AdviceServiceFake implements AdviceService {
    async randomAdvice(): Promise<Advice> {
        return {
            id: 117,
            content: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
        }
    }
}



class AdviceServiceImpl implements AdviceService {
    async randomAdvice(): Promise<Advice> {
        const res = await fetch('https://api.adviceslip.com/advice');
        const { slip: { id, advice } } = await res.json() as AdviceEntity;
        return {
            id,
            content: advice
        }
    }
}


export const adviceService: AdviceService = new AdviceServiceImpl();