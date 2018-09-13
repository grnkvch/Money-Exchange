// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var H, Q, D, N, P, buf;
    var buf = currency;
    var result = {};
        if (buf > 10000) {
            result.error = "You are rich, my friend! We don't have so much coins for exchange";
            return result;
        }

        if (buf >= 50 ) {
            H = (buf - (buf % 50))/50;
            buf = (buf % 50);
            result.H = H;
        }

        if (buf >= 25 ) {
            Q = (buf - (buf % 25 ))/25;
            buf = (buf % 25);
            result.Q = Q;
        }

        if (buf >= 10 ) {
            D = (buf - (buf % 10 ))/10;
            buf = (buf % 10);
            result.D = D;
        }

        if (buf >= 5 ) {
            N = (buf - (buf % 5 ))/5;
            buf = (buf % 5);
            result.N = N;
        }

        if (buf >= 1 ) {
            P = buf;
            result.P = P;
        }
        return result;

}
