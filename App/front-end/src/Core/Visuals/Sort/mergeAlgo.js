function merge(a, l, r){
    var i = 0;
    var j = 0;

    while(i + j < a.length){
        if(j === r.length || (i<l.length && l[i] < r[j]))
            a[i+j] = l[i++];
        else
            a[i+j] = r[j++];
    }
}

export function mergeSort(a) {
    if(a.length < 2) return;
    const len = a.length;

    const mid = len / 2;
    const l = a.slice(0,mid);
    const r = a.slice(mid);

    mergeSort(l);
    mergeSort(r);
    merge(a, l, r);

    return a;
}

function mergeVisual(a, l, r){
    var i = 0;
    var j = 0;

    while(i + j < a.length){
        if(j === r.length || (i<l.length && l[i] < r[j]))
            a[i+j] = l[i++];
        else
            a[i+j] = r[j++];
    }
}

export function mergeSortVisual(a) {
    if(a.length < 2) return;
    const len = a.length;

    const mid = len / 2;
    const l = a.slice(0,mid);
    const r = a.slice(mid);

    mergeSortVisual(l);
    mergeSortVisual(r);
    mergeVisual(a, l, r);

    return a;
}