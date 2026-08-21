import re, sys
src = open('guides/product/index.html').read()
css = re.sub(r'/\*.*?\*/', '', re.search(r'<style>(.*?)</style>', src, re.S).group(1), flags=re.S)

TYPE   = {'0.75rem','1rem','1.333rem','1.777rem','3.158rem'}      # perfect fourth
SPACE  = {'0.25rem','0.5rem','1rem','1.5rem','2rem','3rem','4rem','6rem'}
ROOT   = {'1rem','0.25vw','1.25rem'}                              # fluid root parameters
LAYOUT = {'66ch','64rem','76rem','30rem','50%'}                  # measure, container, breakpoint, hero, art box
ATOM   = {'1px','100%','100vw','0','0.16em','-0.02em','360deg'}           # hairline, tracking, full turn
ALLOWED = TYPE | SPACE | ROOT | LAYOUT | ATOM

lengths = re.findall(r'(?<![\w.#-])(-?\d*\.?\d+(?:px|rem|em|ch|vw|vh|%|deg))', css)
bad = sorted({v for v in lengths if v not in ALLOWED})
vh  = [v for v in lengths if v.endswith('vh')]
clamps = re.findall(r'clamp\([^)]*\)', css)

print(f"length literals: {len(lengths)}   distinct: {len(set(lengths))}   (was 22 bespoke rem values)")
print(f"off-scale: {bad if bad else 'none'}")
print(f"vh-driven values: {len(vh)}   (was 5)")
print(f"clamp() curves: {len(clamps)} -> {clamps}   (was 8, none repeating)")
print(f"media queries: {[m.strip() for m in re.findall(r'@media[^{]*', css)]}")
if bad or vh: sys.exit(1)
print("\nBUILD CHECK PASSED — every length is on the scale")
