import re

with open('propden_website_homepage_wireframe.html', 'r') as f:
    html = f.read()

# Replace class with className
html = html.replace('class="', 'className="')

# Function to convert CSS string to React style object
def convert_style(match):
    style_str = match.group(1)
    rules = style_str.split(';')
    obj_str = "{"
    for rule in rules:
        if not rule.strip(): continue
        parts = rule.split(':', 1)
        if len(parts) == 2:
            key = parts[0].strip()
            val = parts[1].strip()
            # camelCase the key
            parts_key = key.split('-')
            if parts_key[0] == '':
                # handle CSS variables if used as keys? not here.
                pass
            
            camel_key = parts_key[0]
            for p in parts_key[1:]:
                camel_key += p.title()
                
            obj_str += f"'{camel_key}': '{val}', "
    obj_str += "}"
    return f"style={{{obj_str}}}"

html = re.sub(r'style="([^"]*)"', convert_style, html)

# Replace <br> with <br /> and <hr> with <hr />
html = html.replace('<br>', '<br />').replace('<hr>', '<hr />')

jsx = f"""import React from 'react';

function App() {{
  return (
    <>
      {html}
    </>
  );
}}

export default App;
"""

with open('src/App.jsx', 'w') as f:
    f.write(jsx)
