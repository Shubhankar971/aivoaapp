from groq import Groq

client = Groq(api_key="GROQ_KEY")

def extract_interaction(text):

    prompt = f"""

    Extract CRM interaction fields:

    {text}

    Return JSON:
    hcp_name
    product
    sentiment
    follow_up
    """

    res = client.chat.completions.create(
        model="gemma2-9b-it",
        messages=[{"role":"user","content":prompt}]
    )

    return res.choices[0].message.content