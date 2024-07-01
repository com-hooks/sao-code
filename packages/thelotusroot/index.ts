import { ProtoClone } from './clone';
import { ProtoOmit } from './omit';
import { ProtoOmitBy } from './omitBy';
import { ProtoPick } from './pick';
import { ProtoPickBy } from './pickBy';
import { PromiseLotusRoot } from './promise';
import { WithResolves } from './withResolves';
import { ProtoArray } from './array';
import { ProtoCopyEffect } from './copyEffect';
import { ProtoCatch } from './catch';

export default {
    install(wran = false) {
        ProtoArray.install(undefined, wran);
        new ProtoClone().install(wran);
        new ProtoOmit().install(wran);
        new ProtoOmitBy().install(wran);
        new ProtoPick().install(wran);
        new ProtoPickBy().install(wran);
        new PromiseLotusRoot().install(wran);
        new WithResolves().install(wran);
        new ProtoCopyEffect().install(wran);
        new ProtoCatch().install(wran);
    },
}

