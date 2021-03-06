#!/usr/bin/env escript

main(_) ->
    io:format("~B~n", [fib(46)]).

fib(0) -> 1;
fib(1) -> 1;
fib(N) ->
    case get(N) of
        undefined ->
            X = fib(N-1) + fib(N-2),
            put(N, X),
            X;
        X -> X
    end.
