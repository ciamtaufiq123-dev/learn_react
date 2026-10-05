type CounterProps = {
    Counter: number;
};

function Counter({ Counter }: CounterProps) {
    return (
        <p>
            {Counter}
        </p>
    );
}

export default Counter