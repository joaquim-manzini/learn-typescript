export const sum
= (...a: number[]) =>
  a.reduce((acc, val) => acc + val, 0);

export const removeDupes = (str: String) => {
    
    const m = new Map<string, number>();
    for (const s of str) {
        let mget = m.get(s);

        if (!mget) {
            mget = 0;
        }
        m.set(s, ++mget);
    }

    let finalS = new String();
    for (const s of str) {
        const mgets = m.get(s) || 0;
        if (mgets === 1) {
            finalS += s;
            m.delete(s);
        }
        else if (mgets > 1) {
            m.set(s, 1);
        }
    }

    return finalS;
}