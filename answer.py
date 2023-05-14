def outed(meet, boss):
    return 'Get Out Now!' if (sum(meet.values()) + meet[boss] ) / len(meet) <= 5 else 'Nice Work Champ!'
  
def outed(meet, boss):
    total_person = len(meet.keys())
    total_score = 0
    for x in meet.values(): total_score += x
    return 'Nice Work Champ!' if (total_score + meet[boss])/total_person > 5 else 'Get Out Now!'
