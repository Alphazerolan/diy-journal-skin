import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source=fs.readFileSync(new URL('../skins/diy-journal/hooks.mjs',import.meta.url),'utf8');
const start=source.indexOf('function watchJournalSettingsVersion(');
const end=source.indexOf('\n/**\n * diy-journal skin hooks',start);
assert(start>=0&&end>start,'standalone version detector must be bundled in the skin hook');
assert(source.includes('ctx.onCleanup(watchJournalSettingsVersion(window));'),'hook apply owns detector cleanup');
const watch=vm.runInNewContext(source.slice(start,end)+'\nwatchJournalSettingsVersion');
const cases=[['0.1.7-rc.1',false],['0.2.1-rc.2',false],['0.2.1',false],['0.2.2-alpha.99',false],['0.2.2-beta.99',false],['0.2.2-rc',false],['0.2.2-rc0',false],['0.2.2-rc.0',false],['0.2.2-rc1',true],['0.2.2-rc.1',true],['0.2.2-rc.2',true],['0.2.2-rc.3',true],['0.2.2',true],['0.2.3-alpha.1',true],['0.3.0',true],['1.0.0',true],['v0.2.2-rc1+build.123',true],['',false],[null,false],[undefined,false],['unknown',false],['0.2.2-rc.',false],['0.3.0-rc..1',false],['0.2.2-rc.01',false]];
for(const [version,modern]of cases){
 const attrs=new Map(),body={getAttribute:n=>attrs.get(n)??null,setAttribute:(n,v)=>attrs.set(n,v),removeAttribute:n=>attrs.delete(n)};
 const win={document:{body},__DSH_BOOT__:{release:{version}}};
 const off=watch(win),off2=watch(win);
 assert.equal(attrs.get('data-diy-settings-layout'),modern?'rc1':'legacy',String(version));
 off();assert(attrs.has('data-diy-settings-layout'),'a second activation retains ownership');
 off2();assert.equal(attrs.size,0,'last cleanup restores previous attributes');off2();assert.equal(attrs.size,0);
}
console.log(`PASS: ${cases.length} standalone skin version cases and shared lifecycle cleanup.`);
