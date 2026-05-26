"""
たあたる式AI - トークナイザー（形態素解析）
日本語の文を単語に分割する。

簡易版: 文字種の変わり目で分割（ひらがな/カタカナ/漢字/記号）
本格版: MeCab を使う（pip install mecab-python3 unidic-lite）

後からMeCab版に切り替え可能なように、同じインターフェースで設計。
"""
import re


def tokenize_simple(text: str) -> list[str]:
    """
    簡易トークナイザー: 文字種の変わり目で分割。
    MeCabが使えない環境でも動く。
    """
    # 文字種ごとにグループ化
    # ひらがな / カタカナ / 漢字 / ASCII / 記号
    pattern = (
        r'[\u3040-\u309F]+'   # ひらがな
        r'|[\u30A0-\u30FF]+'  # カタカナ
        r'|[\u4E00-\u9FFF]+'  # 漢字
        r'|[a-zA-Z0-9]+'      # 英数字
        r'|[。、！？!?…．.]+' # 句読点・記号
        r'|[\U0001F600-\U0001F64F]+'  # 絵文字
    )
    tokens = re.findall(pattern, text)
    return tokens if tokens else [text]


def tokenize_mecab(text: str) -> list[str]:
    """
    MeCab版トークナイザー: 正確な形態素解析。
    事前に pip install mecab-python3 unidic-lite が必要。
    """
    try:
        import MeCab
        tagger = MeCab.Tagger("-Owakati")
        result = tagger.parse(text).strip()
        tokens = result.split()
        return tokens if tokens else [text]
    except ImportError:
        # MeCabがない場合は簡易版にフォールバック
        return tokenize_simple(text)


# デフォルトのトークナイザー
# MeCabがある環境では tokenize = tokenize_mecab に変更推奨
tokenize = tokenize_simple
