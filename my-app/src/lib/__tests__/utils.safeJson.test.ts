import { safeJson } from '../utils';

describe('safeJson', () => {
  it('returns null for empty string', () => {
    expect(safeJson('')).toBeNull();
  });

  it('parses valid JSON string', () => {
    const obj = safeJson<{ a: number; b: string }>("{\n  \"a\": 1, \n  \"b\": \"x\"\n}");
    expect(obj).toEqual({ a: 1, b: 'x' });
  });

  it('strips ```json fences and parses', () => {
    const input = '```json\n{ "x": 42 }\n```';
    expect(safeJson<{ x: number }>(input)).toEqual({ x: 42 });
  });

  it('strips ``` fences (no language) and parses', () => {
    const input = '```\n{ "ok": true }\n```';
    expect(safeJson<{ ok: boolean }>(input)).toEqual({ ok: true });
  });

  it('trims whitespace around JSON and parses', () => {
    const input = '  \n  {"k":"v"}  \n';
    expect(safeJson<Record<string,string>>(input)).toEqual({ k: 'v' });
  });

  it('returns null for invalid JSON', () => {
    expect(safeJson('{ invalid json')).toBeNull();
  });
});
