---
layout: page
title: 死亡卡牌
description: 卡牌Roguelike
img: assets/img/publication_preview/意图系统.png
importance: 4
category: Individual
giscus_comments: false
---
<strong style="background-color: yellow;">该项目为本科毕业设计作品，设计部分较少，以展示程序能力为主。</strong>

<strong style="background-color: yellow;">该项目使用Unity2D引擎开发，使用C#语言完成。玩法设计部分拆解了杀戮尖塔并基本重筑，并进行了卡牌设计和BOSS设计。</strong>

<strong style="background-color: yellow;">由于设计方面占比较少，该项目仅展示一些拆解和程序代码。</strong>

<strong style="font-size: 24px;">战斗关卡流程图</strong>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/关卡流程图.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<strong style="font-size: 24px;">休息关卡流程图</strong>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/休息点流程图.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<strong style="font-size: 24px;">道具系统</strong>



{% raw %}

```html
public void AddDaoJu(){
    for (int i = 0; i < alldaoju.Count; i++){
        if (!alldaoju[i].gameObject.activeInHierarchy){
            alldaoju[i].item = data.DaojuData[UnityEngine.Random.Range(0, data.DaojuData.Count)];
            alldaoju[i].CreateDaoJu();
            alldaoju[i].gameObject.SetActive(true);
            addDaojuName = alldaoju[i].item.name;
            daojuShowCount++;
            allDaojuItems.Add(alldaoju[i].item);
            break;
        }
    }    
}
public DaojuDataItem OneItem(int index){
    DaojuDataItem item = data.DaojuData[index];
    return item;
}
public void TiHuanItem(DaojuDataItem tihuan,DaojuDataItem beiTiHuan){
    allDaojuItems.Remove(beiTiHuan);
    allDaojuItems.Add(tihuan);
    for (int i = 0; i < alldaoju.Count; i++)
    {
        alldaoju[i].item = allDaojuItems[i];
        alldaoju[i].CreateDaoJu();
    }
}
```

{% endraw %}

<strong style="font-size: 24px;">卡牌管理</strong>

{% raw %}

```html
/// <summary>
/// 等待一秒后增加一张牌
/// </summary>
/// <returns></returns>
IEnumerator WaitAddOneCard(int count,bool isUseMoney=true){
    int num = count;
    yield return new WaitForSeconds(1f);
    for (int j = 0; j < num; j++){
        for (int i = 0; i < allCards.Count; i++){
            if (!allCards[i].gameObject.activeInHierarchy){
                allCards[i].gameObject.SetActive(true);
                allCards[i].CreateCard(ReturnOneCardItem());
                count--;
                if (!isUseMoney)
                    allCards[i].NoUseMoney();
                break;
            }
        }
    }
    if (count>0){
        InsCard(count);
        for (int i = allCards.Count -count +1; i < allCards.Count; i++){
            allCards[i].CreateCard(ReturnOneCardItem());
            if (!isUseMoney)
                allCards[i].NoUseMoney();
        }
    }
}
```

{% endraw %}

<strong style="font-size: 24px;">BOSS</strong>

{% raw %}

```html
/// <summary>
/// 中毒
/// </summary>
public void ZhongDu()
{
    zhongduReduceBlood = 6;
    isZhongDu = true;
    ZhongDuReduce();
}

public void ZhongDuReduce(){
    if (isZhongDu && zhongduReduceBlood>0){
        blood -= zhongduReduceBlood;
        zhongduReduceBlood--;
        RefreshBlood();
        if (blood <= 0){
            if (!isBoss){
                MonsterGameManager.Instance.allMonster.Remove(this);
                gameObject.SetActive(false);

                if (MonsterGameManager.Instance.allMonster.Count <= 0){
                    GamePanel.Instance.rewardPanel.SetActive(true);
                }
            }
            else{
                if (!isBossSecondsLife){
                    monsterblood = 60;
                    blood = monsterblood;
                    RefreshBlood();
                    isBossSecondsLife = true;
                }
                else{
                    //游戏胜利
                    GamePanel.Instance.gameOverPanel.SetActive(true);
                    GameOverPanel.Instance.EndValue("游戏胜利");
                }
            }
        }
    }
}
```

{% endraw %}

<strong style="font-size: 24px;">选择卡牌</strong>

{% raw %}

```html
public void BTNEvent(){
    if (RewardPanel.Instance.rewardCount>0){
        AudioController.Instance.SoundPlay("ToCard");
        RewardPanel.Instance.rewardCount--;
        CardManager.Instance.haveCards.Add(cardItem);
        gameObject.SetActive(false);
    }
}
public void CreateCard(CardDataItem data){
    cardItem = data;
    cardName.text = data.name;
    cardIllustrate.text = data.Illustrate;
    xianjiTxt.text = data.expenses.ToString();
    cardID = data.cardID;
    card_Img.sprite = CardManager.Instance.allCardSprite[cardID - 1];
}
```

{% endraw %}

<strong style="font-size: 24px;">休息点</strong>

{% raw %}

```html
public void RestBtnEvent(){
    AudioController.Instance.SoundPlay("anniu");
    int rad = Player.Instance.RestAddBlood();
    txt.text = $"增加{rad}点血量";
    restView.SetActive(true);
    StartCoroutine(CloseRestView());
}
IEnumerator CloseRestView(){
    yield return new WaitForSeconds(2f);
    restView.SetActive(false);
    restBtn.gameObject.SetActive(false);
    nextBtn.gameObject.SetActive(true);
}
public void NextBtnEvent(){
    AudioController.Instance.SoundPlay("anniu");
    RewardPanel.Instance.NextLevel();
    gameObject.SetActive(false);
}
```

{% endraw %}
