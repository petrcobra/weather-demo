import { useEffect, useRef, useState } from "react";
import { PromiseFunction, State } from "../interfaces/fetch";

const useFetch = <T>() => {
    const controller = useRef<AbortController | null>(null);
    const [state, setState] = useState<State<T>>({type: 'idle'});

    const abort = () => {
        controller.current?.abort();
    }

    const clear = () => {
        setState({type: 'idle'});
    }

    const handleFetch = async (promiseFunction: PromiseFunction<T>) => {
        abort();

        controller.current = new AbortController();

        setState({type: 'pending'});

        try {
            const data = await promiseFunction(controller.current.signal);
            setState({type: 'done', data});
        } catch (error: any) {
            if (controller.current.signal.aborted) {
                console.log('Request aborted');

                return;
            }

            setState({type: 'fail', error});
        }
    }

    useEffect(() => {
        return () => {
            abort();
        }
    }, []);

    return [state, handleFetch, abort, clear] as const;
};

export default useFetch;